# Now


```text
simpleicons-14/N/Now
```

```text
include('simpleicons-14/N/Now')
```



| Illustration | Now |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Now.png) | ![illustration for Now](../../simpleicons-14/N/Now.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NowXs>`
- `<$NowSm>`
- `<$NowMd>`
- `<$NowLg>`





## Now

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Now
include('simpleicons-14/N/Now')

' renders the element
Now('Now', 'Now', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Now
include('simpleicons-14/N/Now')

' renders the element
Now('Now', 'Now', 'an optional tech label', 'an optional description')
@enduml
```

