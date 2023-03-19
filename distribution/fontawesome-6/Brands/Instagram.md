# Instagram


```text
fontawesome-6/Brands/Instagram
```

```text
include('fontawesome-6/Brands/Instagram')
```



| Illustration | Instagram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Instagram.png) | ![illustration for Instagram](../../fontawesome-6/Brands/Instagram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InstagramXs>`
- `<$InstagramSm>`
- `<$InstagramMd>`
- `<$InstagramLg>`





## Instagram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Instagram
include('fontawesome-6/Brands/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instagram
include('fontawesome-6/Brands/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label', 'an optional description')
@enduml
```

