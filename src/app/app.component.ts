import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface CallRecord {
  id: string;
  dealerName: string;
  additionalInfo: string;
  issueCategory: string;
  issueStatus: string;
  comments: string;
  callStatus: string;
  callDetails: string;
  date: string;
  time: string;
  duration: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit{
  @ViewChild('pieChart', { static: false }) pieChart!: ElementRef<HTMLCanvasElement>;
  title = 'analytics-dashboard';
   callRecords: CallRecord[] = [
    {
      id: 'DM022584',
      dealerName: 'Ritik Beniwal',
      additionalInfo: 'Lead',
      issueCategory: 'KYC',
      issueStatus: 'Unresolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Resolved',
      callDetails: '20 Apr 2025',
      date: '20 Apr 2025',
      time: '6:02 PM',
      duration: '04.5 min'
    },
    {
      id: 'DM022585',
      dealerName: 'Manpreet Singh',
      additionalInfo: 'Opportunity',
      issueCategory: 'e-Mandate',
      issueStatus: 'Resolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Scheduled',
      callDetails: '20 Apr 2025',
      date: '20 Apr 2025',
      time: '6:02 PM',
      duration: '04.2 min'
    },
    {
      id: 'DM022586',
      dealerName: 'Avika Sharma',
      additionalInfo: 'NACH',
      issueCategory: 'e-Mandate',
      issueStatus: 'Pending',
      comments: 'Lorem Ipsum',
      callStatus: 'Ended',
      callDetails: '20 Apr 2025',
      date: '20 Apr 2025',
      time: '6:02 PM',
      duration: '04.2 min'
    },
    {
      id: 'DM022587',
      dealerName: 'Saurabh Kumar',
      additionalInfo: 'Contact ID',
      issueCategory: 'e-Mandate',
      issueStatus: 'Resolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Ended',
      callDetails: '20 Apr 2025',
      date: '20 Apr 2025',
      time: '6:02 PM',
      duration: '04.2 min'
    },
    {
      id: 'DM022588',
      dealerName: 'Hrithik Runak',
      additionalInfo: 'Payment ID',
      issueCategory: 'e-Mandate',
      issueStatus: 'Pending',
      comments: 'Lorem Ipsum',
      callStatus: 'Ended',
      callDetails: '20 Apr 2025',
      date: '20 Apr 2025',
      time: '6:02 PM',
      duration: '04.2 min'
    },
    {
      id: 'DM022589',
      dealerName: 'Naman Jain',
      additionalInfo: 'Lead',
      issueCategory: 'e-Mandate',
      issueStatus: 'Unresolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Cancelled',
      callDetails: '20 Apr 2025',
      date: '20 Apr 2025',
      time: '6:02 PM',
      duration: '04.2 min'
    }
  ];

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.drawPieChart();
  }

  drawPieChart() {
    const canvas = this.pieChart.nativeElement;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;

    // Data for pie chart
    const data = [
      { label: 'Answered', value: 45, color: '#007bff' },
      { label: 'Pending', value: 25, color: '#ffc107' },
      { label: 'Resolved', value: 30, color: '#28a745' }
    ];

    let currentAngle = -Math.PI / 2; // Start from top

    data.forEach(segment => {
      const sliceAngle = (segment.value / 100) * 2 * Math.PI;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = segment.color;
      ctx.fill();

      currentAngle += sliceAngle;
    });

    // Draw white center circle for donut effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}


