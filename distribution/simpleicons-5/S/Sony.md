# Sony


```text
simpleicons-5/S/Sony
```

```text
include('simpleicons-5/S/Sony')
```



| Illustration | Sony |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sony.png) | ![illustration for Sony](../../simpleicons-5/S/Sony.Local.png) |




## Sony

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sony
include('simpleicons-5/S/Sony')

' renders the element
Sony('Sony', 'Sony', 'an optional tech label')
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

' loads the Item which embeds the element Sony
include('simpleicons-5/S/Sony')

' renders the element
Sony('Sony', 'Sony', 'an optional tech label')
@enduml
```

