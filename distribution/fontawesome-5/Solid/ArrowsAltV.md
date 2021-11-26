# ArrowsAltV


```text
fontawesome-5/Solid/ArrowsAltV
```

```text
include('fontawesome-5/Solid/ArrowsAltV')
```



| Illustration | ArrowsAltV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowsAltV.png) | ![illustration for ArrowsAltV](../../fontawesome-5/Solid/ArrowsAltV.Local.png) |




## ArrowsAltV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowsAltV
include('fontawesome-5/Solid/ArrowsAltV')

' renders the element
ArrowsAltV('ArrowsAltV', 'Arrows Alt V', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowsAltV
include('fontawesome-5/Solid/ArrowsAltV')

' renders the element
ArrowsAltV('ArrowsAltV', 'Arrows Alt V', 'an optional tech label')
@enduml
```

