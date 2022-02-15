# Threema


```text
simpleicons-6/T/Threema
```

```text
include('simpleicons-6/T/Threema')
```



| Illustration | Threema |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Threema.png) | ![illustration for Threema](../../simpleicons-6/T/Threema.Local.png) |




## Threema

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Threema
include('simpleicons-6/T/Threema')

' renders the element
Threema('Threema', 'Threema', 'an optional tech label')
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

' loads the Item which embeds the element Threema
include('simpleicons-6/T/Threema')

' renders the element
Threema('Threema', 'Threema', 'an optional tech label')
@enduml
```

