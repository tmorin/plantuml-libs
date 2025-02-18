# Indeed


```text
simpleicons-14/I/Indeed
```

```text
include('simpleicons-14/I/Indeed')
```



| Illustration | Indeed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Indeed.png) | ![illustration for Indeed](../../simpleicons-14/I/Indeed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IndeedXs>`
- `<$IndeedSm>`
- `<$IndeedMd>`
- `<$IndeedLg>`





## Indeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Indeed
include('simpleicons-14/I/Indeed')

' renders the element
Indeed('Indeed', 'Indeed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Indeed
include('simpleicons-14/I/Indeed')

' renders the element
Indeed('Indeed', 'Indeed', 'an optional tech label', 'an optional description')
@enduml
```

