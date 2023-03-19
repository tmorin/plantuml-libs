# FileWaveform


```text
fontawesome-6/Solid/FileWaveform
```

```text
include('fontawesome-6/Solid/FileWaveform')
```



| Illustration | FileWaveform |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileWaveform.png) | ![illustration for FileWaveform](../../fontawesome-6/Solid/FileWaveform.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileWaveformXs>`
- `<$FileWaveformSm>`
- `<$FileWaveformMd>`
- `<$FileWaveformLg>`





## FileWaveform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileWaveform
include('fontawesome-6/Solid/FileWaveform')

' renders the element
FileWaveform('FileWaveform', 'File Waveform', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileWaveform
include('fontawesome-6/Solid/FileWaveform')

' renders the element
FileWaveform('FileWaveform', 'File Waveform', 'an optional tech label', 'an optional description')
@enduml
```

