# W3Schools


```text
simpleicons-14/W/W3Schools
```

```text
include('simpleicons-14/W/W3Schools')
```



| Illustration | W3Schools |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/W3Schools.png) | ![illustration for W3Schools](../../simpleicons-14/W/W3Schools.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$W3SchoolsXs>`
- `<$W3SchoolsSm>`
- `<$W3SchoolsMd>`
- `<$W3SchoolsLg>`





## W3Schools

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element W3Schools
include('simpleicons-14/W/W3Schools')

' renders the element
W3Schools('W3Schools', 'W3 Schools', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element W3Schools
include('simpleicons-14/W/W3Schools')

' renders the element
W3Schools('W3Schools', 'W3 Schools', 'an optional tech label', 'an optional description')
@enduml
```

