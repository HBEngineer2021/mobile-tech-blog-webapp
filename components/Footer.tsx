import { memo } from 'react';
// materialUI
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoteIcon from '@mui/icons-material/Note';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';

const FooterContainer = styled('div')({
    backgroundColor: '#0b5394ff',
    margin: '0 auto',
    paddingTop: '30px',
    paddingBottom: '30px',
    color: '#f2f2f2',
    letterSpacing: '0.08rem',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
});

export const Footer = memo(function footer() {
    return (
        <FooterContainer>
            <Grid item xs={10} md={8}>
                {/* <div className="grid grid-cols-3 gap-3">
                        <Grid item sx={{ textAlign: 'left' }}>
                            <div className="container inline-block font-bold">
                                About
                            </div>
                            <ul>
                                <li>aaaaaaa</li>
                                <li>bbbbbbb</li>
                                <li>ccccccc</li>
                            </ul>
                        </Grid>
                        <Grid item sx={{ textAlign: 'left' }}>
                            <div className="container inline-block font-bold">
                                Links
                            </div>
                            <ul>
                                <li>aaaaaaa</li>
                                <li>bbbbbbb</li>
                                <li>ccccccc</li>
                            </ul>
                        </Grid>
                        <Grid item sx={{ textAlign: 'left' }}>
                            <div className="container inline-block font-bold">
                                Legal
                            </div>
                            <ul>
                                <li>aaaaaaa</li>
                                <li>bbbbbbb</li>
                                <li>ccccccc</li>
                            </ul>
                        </Grid>
                    </div> */}
                <div className="my-3 border-t-2 border-indigo-500" />
                <Grid item sx={{ textAlign: 'center' }}>
                    <a href='https://github.com/HBEngineer2021'>
                        <GitHubIcon sx={{ m: 1 }} />
                    </a>
                    <a href='https://note.com/branch_it_sol205'>
                        <NoteIcon sx={{ m: 1 }} />
                    </a>
                    <a href='https://developer.apple.com/documentation/technologies'>
                        <AppleIcon sx={{ m: 1 }} />
                    </a>
                    <a href='https://developer.android.com/guide'>
                        <AdbIcon sx={{ m: 1 }} />
                    </a>
                </Grid>
                <Typography variant='body2' sx={{ textAlign: 'center', fontWeight: '200' }}>
                    © 2022 - 2025 Mobile Tech Blog
                </Typography>
            </Grid>
        </FooterContainer>
    );
});