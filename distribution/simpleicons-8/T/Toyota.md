# Toyota


```text
simpleicons-8/T/Toyota
```

```text
include('simpleicons-8/T/Toyota')
```



| Illustration | Toyota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Toyota.png) | ![illustration for Toyota](../../simpleicons-8/T/Toyota.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToyotaXs>`
- `<$ToyotaSm>`
- `<$ToyotaMd>`
- `<$ToyotaLg>`





## Toyota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Toyota
include('simpleicons-8/T/Toyota')

' renders the element
Toyota('Toyota', 'Toyota', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Toyota
include('simpleicons-8/T/Toyota')

' renders the element
Toyota('Toyota', 'Toyota', 'an optional tech label', 'an optional description')
@enduml
```

