# Smart


```text
simpleicons-8/S/Smart
```

```text
include('simpleicons-8/S/Smart')
```



| Illustration | Smart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Smart.png) | ![illustration for Smart](../../simpleicons-8/S/Smart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmartXs>`
- `<$SmartSm>`
- `<$SmartMd>`
- `<$SmartLg>`





## Smart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Smart
include('simpleicons-8/S/Smart')

' renders the element
Smart('Smart', 'Smart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smart
include('simpleicons-8/S/Smart')

' renders the element
Smart('Smart', 'Smart', 'an optional tech label', 'an optional description')
@enduml
```

