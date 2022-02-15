# Square


```text
simpleicons-6/S/Square
```

```text
include('simpleicons-6/S/Square')
```



| Illustration | Square |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Square.png) | ![illustration for Square](../../simpleicons-6/S/Square.Local.png) |




## Square

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Square
include('simpleicons-6/S/Square')

' renders the element
Square('Square', 'Square', 'an optional tech label')
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

' loads the Item which embeds the element Square
include('simpleicons-6/S/Square')

' renders the element
Square('Square', 'Square', 'an optional tech label')
@enduml
```

