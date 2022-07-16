# Antdesign


```text
simpleicons-7/A/Antdesign
```

```text
include('simpleicons-7/A/Antdesign')
```



| Illustration | Antdesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Antdesign.png) | ![illustration for Antdesign](../../simpleicons-7/A/Antdesign.Local.png) |




## Antdesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Antdesign
include('simpleicons-7/A/Antdesign')

' renders the element
Antdesign('Antdesign', 'Antdesign', 'an optional tech label')
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

' loads the Item which embeds the element Antdesign
include('simpleicons-7/A/Antdesign')

' renders the element
Antdesign('Antdesign', 'Antdesign', 'an optional tech label')
@enduml
```

