# LinkedinIn


```text
fontawesome/Brands/LinkedinIn
```

```text
include('fontawesome/Brands/LinkedinIn')
```



| Illustration | LinkedinIn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/LinkedinIn.png) | ![illustration for LinkedinIn](../../fontawesome/Brands/LinkedinIn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkedinInXs>`
- `<$LinkedinInSm>`
- `<$LinkedinInMd>`
- `<$LinkedinInLg>`





## LinkedinIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LinkedinIn
include('fontawesome/Brands/LinkedinIn')

' renders the element
LinkedinIn('LinkedinIn', 'Linkedin In', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LinkedinIn
include('fontawesome/Brands/LinkedinIn')

' renders the element
LinkedinIn('LinkedinIn', 'Linkedin In', 'an optional tech label', 'an optional description')
@enduml
```

