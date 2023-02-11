# Publons


```text
simpleicons-8/P/Publons
```

```text
include('simpleicons-8/P/Publons')
```



| Illustration | Publons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Publons.png) | ![illustration for Publons](../../simpleicons-8/P/Publons.Local.png) |




## Publons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Publons
include('simpleicons-8/P/Publons')

' renders the element
Publons('Publons', 'Publons', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Publons
include('simpleicons-8/P/Publons')

' renders the element
Publons('Publons', 'Publons', 'an optional tech label', 'an optional description')
@enduml
```

