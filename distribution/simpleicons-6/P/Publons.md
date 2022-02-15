# Publons


```text
simpleicons-6/P/Publons
```

```text
include('simpleicons-6/P/Publons')
```



| Illustration | Publons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Publons.png) | ![illustration for Publons](../../simpleicons-6/P/Publons.Local.png) |




## Publons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Publons
include('simpleicons-6/P/Publons')

' renders the element
Publons('Publons', 'Publons', 'an optional tech label')
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

' loads the Item which embeds the element Publons
include('simpleicons-6/P/Publons')

' renders the element
Publons('Publons', 'Publons', 'an optional tech label')
@enduml
```

