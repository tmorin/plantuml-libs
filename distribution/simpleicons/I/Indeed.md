# Indeed


```text
simpleicons/I/Indeed
```

```text
include('simpleicons/I/Indeed')
```



| Illustration | Indeed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Indeed.png) | ![illustration for Indeed](../../simpleicons/I/Indeed.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Indeed
include('simpleicons/I/Indeed')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Indeed
include('simpleicons/I/Indeed')

' renders the element
Indeed('Indeed', 'Indeed', 'an optional tech label', 'an optional description')
@enduml
```

