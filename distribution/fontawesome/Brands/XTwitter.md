# XTwitter


```text
fontawesome/Brands/XTwitter
```

```text
include('fontawesome/Brands/XTwitter')
```



| Illustration | XTwitter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/XTwitter.png) | ![illustration for XTwitter](../../fontawesome/Brands/XTwitter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XTwitterXs>`
- `<$XTwitterSm>`
- `<$XTwitterMd>`
- `<$XTwitterLg>`





## XTwitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element XTwitter
include('fontawesome/Brands/XTwitter')

' renders the element
XTwitter('XTwitter', 'X Twitter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element XTwitter
include('fontawesome/Brands/XTwitter')

' renders the element
XTwitter('XTwitter', 'X Twitter', 'an optional tech label', 'an optional description')
@enduml
```

