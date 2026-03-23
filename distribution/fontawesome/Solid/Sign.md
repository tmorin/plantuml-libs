# Sign


```text
fontawesome/Solid/Sign
```

```text
include('fontawesome/Solid/Sign')
```



| Illustration | Sign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Sign.png) | ![illustration for Sign](../../fontawesome/Solid/Sign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignXs>`
- `<$SignSm>`
- `<$SignMd>`
- `<$SignLg>`





## Sign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sign
include('fontawesome/Solid/Sign')

' renders the element
Sign('Sign', 'Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sign
include('fontawesome/Solid/Sign')

' renders the element
Sign('Sign', 'Sign', 'an optional tech label', 'an optional description')
@enduml
```

