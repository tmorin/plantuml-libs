# Koc


```text
simpleicons-6/K/Koc
```

```text
include('simpleicons-6/K/Koc')
```



| Illustration | Koc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Koc.png) | ![illustration for Koc](../../simpleicons-6/K/Koc.Local.png) |




## Koc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Koc
include('simpleicons-6/K/Koc')

' renders the element
Koc('Koc', 'Koc', 'an optional tech label')
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

' loads the Item which embeds the element Koc
include('simpleicons-6/K/Koc')

' renders the element
Koc('Koc', 'Koc', 'an optional tech label')
@enduml
```

