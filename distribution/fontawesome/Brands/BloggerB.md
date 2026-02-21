# BloggerB


```text
fontawesome/Brands/BloggerB
```

```text
include('fontawesome/Brands/BloggerB')
```



| Illustration | BloggerB |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/BloggerB.png) | ![illustration for BloggerB](../../fontawesome/Brands/BloggerB.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BloggerBXs>`
- `<$BloggerBSm>`
- `<$BloggerBMd>`
- `<$BloggerBLg>`





## BloggerB

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BloggerB
include('fontawesome/Brands/BloggerB')

' renders the element
BloggerB('BloggerB', 'Blogger B', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BloggerB
include('fontawesome/Brands/BloggerB')

' renders the element
BloggerB('BloggerB', 'Blogger B', 'an optional tech label', 'an optional description')
@enduml
```

