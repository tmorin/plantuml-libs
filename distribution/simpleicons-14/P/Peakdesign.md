# Peakdesign


```text
simpleicons-14/P/Peakdesign
```

```text
include('simpleicons-14/P/Peakdesign')
```



| Illustration | Peakdesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Peakdesign.png) | ![illustration for Peakdesign](../../simpleicons-14/P/Peakdesign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeakdesignXs>`
- `<$PeakdesignSm>`
- `<$PeakdesignMd>`
- `<$PeakdesignLg>`





## Peakdesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Peakdesign
include('simpleicons-14/P/Peakdesign')

' renders the element
Peakdesign('Peakdesign', 'Peakdesign', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Peakdesign
include('simpleicons-14/P/Peakdesign')

' renders the element
Peakdesign('Peakdesign', 'Peakdesign', 'an optional tech label', 'an optional description')
@enduml
```

