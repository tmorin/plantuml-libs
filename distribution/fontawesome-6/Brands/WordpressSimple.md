# WordpressSimple


```text
fontawesome-6/Brands/WordpressSimple
```

```text
include('fontawesome-6/Brands/WordpressSimple')
```



| Illustration | WordpressSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/WordpressSimple.png) | ![illustration for WordpressSimple](../../fontawesome-6/Brands/WordpressSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WordpressSimpleXs>`
- `<$WordpressSimpleSm>`
- `<$WordpressSimpleMd>`
- `<$WordpressSimpleLg>`





## WordpressSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WordpressSimple
include('fontawesome-6/Brands/WordpressSimple')

' renders the element
WordpressSimple('WordpressSimple', 'Wordpress Simple', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WordpressSimple
include('fontawesome-6/Brands/WordpressSimple')

' renders the element
WordpressSimple('WordpressSimple', 'Wordpress Simple', 'an optional tech label', 'an optional description')
@enduml
```

