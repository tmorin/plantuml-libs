# Sony


```text
simpleicons-7/S/Sony
```

```text
include('simpleicons-7/S/Sony')
```



| Illustration | Sony |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sony.png) | ![illustration for Sony](../../simpleicons-7/S/Sony.Local.png) |




## Sony

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sony
include('simpleicons-7/S/Sony')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sony
include('simpleicons-7/S/Sony')

' renders the element
Sony('Sony', 'Sony', 'an optional tech label')
@enduml
```

