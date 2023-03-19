# Gift


```text
fontawesome-6/Solid/Gift
```

```text
include('fontawesome-6/Solid/Gift')
```



| Illustration | Gift |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gift.png) | ![illustration for Gift](../../fontawesome-6/Solid/Gift.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GiftXs>`
- `<$GiftSm>`
- `<$GiftMd>`
- `<$GiftLg>`





## Gift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gift
include('fontawesome-6/Solid/Gift')

' renders the element
Gift('Gift', 'Gift', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gift
include('fontawesome-6/Solid/Gift')

' renders the element
Gift('Gift', 'Gift', 'an optional tech label', 'an optional description')
@enduml
```

