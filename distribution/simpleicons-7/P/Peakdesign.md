# Peakdesign


```text
simpleicons-7/P/Peakdesign
```

```text
include('simpleicons-7/P/Peakdesign')
```



| Illustration | Peakdesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Peakdesign.png) | ![illustration for Peakdesign](../../simpleicons-7/P/Peakdesign.Local.png) |




## Peakdesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Peakdesign
include('simpleicons-7/P/Peakdesign')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Peakdesign
include('simpleicons-7/P/Peakdesign')

' renders the element
Peakdesign('Peakdesign', 'Peakdesign', 'an optional tech label', 'an optional description')
@enduml
```

