# Hungryjacks


```text
simpleicons-6/H/Hungryjacks
```

```text
include('simpleicons-6/H/Hungryjacks')
```



| Illustration | Hungryjacks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hungryjacks.png) | ![illustration for Hungryjacks](../../simpleicons-6/H/Hungryjacks.Local.png) |




## Hungryjacks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hungryjacks
include('simpleicons-6/H/Hungryjacks')

' renders the element
Hungryjacks('Hungryjacks', 'Hungryjacks', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hungryjacks
include('simpleicons-6/H/Hungryjacks')

' renders the element
Hungryjacks('Hungryjacks', 'Hungryjacks', 'an optional tech label')
@enduml
```

