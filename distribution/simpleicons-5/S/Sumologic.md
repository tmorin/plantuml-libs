# Sumologic


```text
simpleicons-5/S/Sumologic
```

```text
include('simpleicons-5/S/Sumologic')
```



| Illustration | Sumologic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sumologic.png) | ![illustration for Sumologic](../../simpleicons-5/S/Sumologic.Local.png) |




## Sumologic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sumologic
include('simpleicons-5/S/Sumologic')

' renders the element
Sumologic('Sumologic', 'Sumologic', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sumologic
include('simpleicons-5/S/Sumologic')

' renders the element
Sumologic('Sumologic', 'Sumologic', 'an optional tech label')
@enduml
```

