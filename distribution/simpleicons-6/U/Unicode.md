# Unicode


```text
simpleicons-6/U/Unicode
```

```text
include('simpleicons-6/U/Unicode')
```



| Illustration | Unicode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Unicode.png) | ![illustration for Unicode](../../simpleicons-6/U/Unicode.Local.png) |




## Unicode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Unicode
include('simpleicons-6/U/Unicode')

' renders the element
Unicode('Unicode', 'Unicode', 'an optional tech label')
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

' loads the Item which embeds the element Unicode
include('simpleicons-6/U/Unicode')

' renders the element
Unicode('Unicode', 'Unicode', 'an optional tech label')
@enduml
```

