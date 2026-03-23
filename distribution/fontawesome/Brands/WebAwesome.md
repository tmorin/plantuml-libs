# WebAwesome


```text
fontawesome/Brands/WebAwesome
```

```text
include('fontawesome/Brands/WebAwesome')
```



| Illustration | WebAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/WebAwesome.png) | ![illustration for WebAwesome](../../fontawesome/Brands/WebAwesome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebAwesomeXs>`
- `<$WebAwesomeSm>`
- `<$WebAwesomeMd>`
- `<$WebAwesomeLg>`





## WebAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WebAwesome
include('fontawesome/Brands/WebAwesome')

' renders the element
WebAwesome('WebAwesome', 'Web Awesome', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element WebAwesome
include('fontawesome/Brands/WebAwesome')

' renders the element
WebAwesome('WebAwesome', 'Web Awesome', 'an optional tech label', 'an optional description')
@enduml
```

