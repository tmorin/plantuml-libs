# Zabka


```text
simpleicons-7/Z/Zabka
```

```text
include('simpleicons-7/Z/Zabka')
```



| Illustration | Zabka |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zabka.png) | ![illustration for Zabka](../../simpleicons-7/Z/Zabka.Local.png) |




## Zabka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zabka
include('simpleicons-7/Z/Zabka')

' renders the element
Zabka('Zabka', 'Zabka', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zabka
include('simpleicons-7/Z/Zabka')

' renders the element
Zabka('Zabka', 'Zabka', 'an optional tech label', 'an optional description')
@enduml
```

