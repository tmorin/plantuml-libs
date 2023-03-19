# Rev


```text
fontawesome-6/Brands/Rev
```

```text
include('fontawesome-6/Brands/Rev')
```



| Illustration | Rev |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Rev.png) | ![illustration for Rev](../../fontawesome-6/Brands/Rev.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RevXs>`
- `<$RevSm>`
- `<$RevMd>`
- `<$RevLg>`





## Rev

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Rev
include('fontawesome-6/Brands/Rev')

' renders the element
Rev('Rev', 'Rev', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rev
include('fontawesome-6/Brands/Rev')

' renders the element
Rev('Rev', 'Rev', 'an optional tech label', 'an optional description')
@enduml
```

