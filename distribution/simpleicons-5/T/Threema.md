# Threema


```text
simpleicons-5/T/Threema
```

```text
include('simpleicons-5/T/Threema')
```



| Illustration | Threema |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Threema.png) | ![illustration for Threema](../../simpleicons-5/T/Threema.Local.png) |




## Threema

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Threema
include('simpleicons-5/T/Threema')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Threema
include('simpleicons-5/T/Threema')

' renders the element
Threema('Threema', 'Threema', 'an optional tech label')
@enduml
```

