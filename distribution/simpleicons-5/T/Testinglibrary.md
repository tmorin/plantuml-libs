# Testinglibrary


```text
simpleicons-5/T/Testinglibrary
```

```text
include('simpleicons-5/T/Testinglibrary')
```



| Illustration | Testinglibrary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Testinglibrary.png) | ![illustration for Testinglibrary](../../simpleicons-5/T/Testinglibrary.Local.png) |




## Testinglibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Testinglibrary
include('simpleicons-5/T/Testinglibrary')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Testinglibrary
include('simpleicons-5/T/Testinglibrary')

' renders the element
Testinglibrary('Testinglibrary', 'Testinglibrary', 'an optional tech label')
@enduml
```

