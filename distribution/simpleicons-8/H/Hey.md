# Hey


```text
simpleicons-8/H/Hey
```

```text
include('simpleicons-8/H/Hey')
```



| Illustration | Hey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hey.png) | ![illustration for Hey](../../simpleicons-8/H/Hey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeyXs>`
- `<$HeySm>`
- `<$HeyMd>`
- `<$HeyLg>`





## Hey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hey
include('simpleicons-8/H/Hey')

' renders the element
Hey('Hey', 'Hey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hey
include('simpleicons-8/H/Hey')

' renders the element
Hey('Hey', 'Hey', 'an optional tech label', 'an optional description')
@enduml
```

