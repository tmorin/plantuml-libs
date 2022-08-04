# Icon


```text
simpleicons-7/I/Icon
```

```text
include('simpleicons-7/I/Icon')
```



| Illustration | Icon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Icon.png) | ![illustration for Icon](../../simpleicons-7/I/Icon.Local.png) |




## Icon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Icon
include('simpleicons-7/I/Icon')

' renders the element
Icon('Icon', 'Icon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Icon
include('simpleicons-7/I/Icon')

' renders the element
Icon('Icon', 'Icon', 'an optional tech label', 'an optional description')
@enduml
```

