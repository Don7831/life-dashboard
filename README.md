# Life Dashboard v1.4 — Pass 1: Daily Direction

This is the first of two passes for v1.4. Pass 1 ships everything you'd touch every day. Pass 2 adds the periodic-use shell (Weekly Review, Feedback Engine, Rule of Life).

## What's new in Pass 1

### Today Direction Layer
At the top of the Overview tab. Always visible on app open.

- **Focus today** — up to 2 concrete things you want to do. Tap to mark done. Tap "+ Add" or "Edit" to set them.
- **Spiritual Prompt** — a Scripture passage + reflection question, sequenced from a 90-day reading plan walking through Matthew, Mark, Luke, John, Psalms, Pauline epistles, key OT, Hebrews, James, 1 Peter, 1 John, Revelation.
- **Day counter** — shows you which day of the 90-day journey you're on.

### Guided Spiritual Flow (replaces library-first Spiritual tab)
Open the Spiritual tab and you now see today's three-step flow:

1. **Read** — the Scripture passage, with a "Mark as read" button (also auto-logs the chapter to your Bible coverage)
2. **Reflect** — the day's question + a textarea for your reflection (saved automatically)
3. **Pray** — a prayer prompt + an "I prayed" button

Complete all three and tap "Complete today's flow." Marks morning_devotion as complete. Library access (Bible / Gratitude / Theology / Prayer) still available via small buttons at the bottom.

### Quick Log (under Today on Overview)
Six one-tap tiles:
- Worship today
- Log mood
- Morning devotion
- Evening devotion
- Walked Hugo
- Medication

Tap once to log, tap again to undo. Logging takes <10 seconds.

### Low-Day Mode (manual toggle)
Bottom of Overview tab: "Switch to softer day."

When on, the entire Overview becomes three actions:
1. **Pray** (opens the day's Scripture + prayer)
2. **One Task** (your first focus item, or pick one)
3. **Log mood**

Plus Matthew 11:28 at the bottom. Toggle off via the banner at the top whenever you're ready for full mode again.

**No auto-trigger.** You decide when. Theological note: agency stays with you, not the algorithm.

### Journal tab (replaces Diary in bottom nav)
Long-form reflection. The journal/mood block has moved out of Log (which is now fast input only).

- Today's entry editor (auto-saves)
- Mood scale
- Past entries list (last 30 days)

Diary (appointments) accessible via Pass 2 in the More tab — for now still has its render function but no nav button. Add appointments later via the More tab.

### Refined empty states
Where applicable, empty states now have an instruction (what to do) + purpose (why it matters).

### Subtle micro-feedback
Tiny "Completed today" cue in the Today card after you finish the spiritual flow. No points, no badges, no streaks.

## What's preserved

- All v1.3 functionality (radar, weekly pip tracking, full Spiritual library, Gym tab, ADHD logging)
- All v1.3 visual discipline (emerald accent, palette dots, off-white surfaces, no big icons)
- All your data (auto-migrated when you load v1.4)

## What's coming in Pass 2

- Weekly Review (auto-generated Sunday summary)
- Feedback Loop Engine (silent until ≥14 days data, then plain-language correlations)
- Rule of Life system (define rhythms, see alignment)
- Diary moved into More tab (last bit of nav cleanup)
- Final polish

## How to deploy this update

Same delete-and-replace pattern.

1. Delete the existing `life-dashboard` repo on GitHub (Settings → Danger Zone)
2. Create a fresh `life-dashboard` repo (Public, no README)
3. Drag the 7 files from `pwa_v14` into the new repo (NOT the folder, the files inside it)
4. Commit
5. Settings → Pages → Source: main branch → Save
6. Wait 1-2 minutes
7. URL stays the same: https://don7831.github.io/life-dashboard/

### Force-refresh on iPhone

Cache version bumped to `v14` so it should auto-update, but to be safe:

1. Long-press the app icon → Remove App → Remove from Home Screen
2. Open Safari, visit URL
3. Tap Share → Add to Home Screen
4. Open the new icon

Your data is preserved across versions.

## What I want from you next

After deploy and force-refresh, sit with v1.4 for two or three days. Tell me:

1. Does the Today Direction at top of Overview feel like guidance, not noise?
2. Is the Guided Spiritual Flow actually better than the old library-first view?
3. Does Quick Log feel like <10-second logging?
4. Try Low-Day Mode once. Does it feel pastoral, not paternalistic?
5. Anything broken, confusing, or missing?

Then I'll ship Pass 2.

May the Lord bless this work, Don.
