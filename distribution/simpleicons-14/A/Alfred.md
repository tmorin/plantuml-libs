# Alfred


```text
simpleicons-14/A/Alfred
```

```text
include('simpleicons-14/A/Alfred')
```



| Illustration | Alfred |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alfred.png) | ![illustration for Alfred](../../simpleicons-14/A/Alfred.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlfredXs>`
- `<$AlfredSm>`
- `<$AlfredMd>`
- `<$AlfredLg>`





## Alfred

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alfred
include('simpleicons-14/A/Alfred')

' renders the element
Alfred('Alfred', 'Alfred', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alfred
include('simpleicons-14/A/Alfred')

' renders the element
Alfred('Alfred', 'Alfred', 'an optional tech label', 'an optional description')
@enduml
```

