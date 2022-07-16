# Testinglibrary


```text
simpleicons-7/T/Testinglibrary
```

```text
include('simpleicons-7/T/Testinglibrary')
```



| Illustration | Testinglibrary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Testinglibrary.png) | ![illustration for Testinglibrary](../../simpleicons-7/T/Testinglibrary.Local.png) |




## Testinglibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Testinglibrary
include('simpleicons-7/T/Testinglibrary')

' renders the element
Testinglibrary('Testinglibrary', 'Testinglibrary', 'an optional tech label')
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

' loads the Item which embeds the element Testinglibrary
include('simpleicons-7/T/Testinglibrary')

' renders the element
Testinglibrary('Testinglibrary', 'Testinglibrary', 'an optional tech label')
@enduml
```

