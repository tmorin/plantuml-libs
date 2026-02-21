# Origin


```text
simpleicons/O/Origin
```

```text
include('simpleicons/O/Origin')
```



| Illustration | Origin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Origin.png) | ![illustration for Origin](../../simpleicons/O/Origin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OriginXs>`
- `<$OriginSm>`
- `<$OriginMd>`
- `<$OriginLg>`





## Origin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Origin
include('simpleicons/O/Origin')

' renders the element
Origin('Origin', 'Origin', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Origin
include('simpleicons/O/Origin')

' renders the element
Origin('Origin', 'Origin', 'an optional tech label', 'an optional description')
@enduml
```

