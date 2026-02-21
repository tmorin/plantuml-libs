# Fritz


```text
simpleicons-14/F/Fritz
```

```text
include('simpleicons-14/F/Fritz')
```



| Illustration | Fritz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fritz.png) | ![illustration for Fritz](../../simpleicons-14/F/Fritz.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FritzXs>`
- `<$FritzSm>`
- `<$FritzMd>`
- `<$FritzLg>`





## Fritz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fritz
include('simpleicons-14/F/Fritz')

' renders the element
Fritz('Fritz', 'Fritz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fritz
include('simpleicons-14/F/Fritz')

' renders the element
Fritz('Fritz', 'Fritz', 'an optional tech label', 'an optional description')
@enduml
```

