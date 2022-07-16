# Amp


```text
simpleicons-7/A/Amp
```

```text
include('simpleicons-7/A/Amp')
```



| Illustration | Amp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amp.png) | ![illustration for Amp](../../simpleicons-7/A/Amp.Local.png) |




## Amp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amp
include('simpleicons-7/A/Amp')

' renders the element
Amp('Amp', 'Amp', 'an optional tech label')
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

' loads the Item which embeds the element Amp
include('simpleicons-7/A/Amp')

' renders the element
Amp('Amp', 'Amp', 'an optional tech label')
@enduml
```

