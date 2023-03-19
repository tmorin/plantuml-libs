# Key


```text
fontawesome-6/Solid/Key
```

```text
include('fontawesome-6/Solid/Key')
```



| Illustration | Key |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Key.png) | ![illustration for Key](../../fontawesome-6/Solid/Key.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyXs>`
- `<$KeySm>`
- `<$KeyMd>`
- `<$KeyLg>`





## Key

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Key
include('fontawesome-6/Solid/Key')

' renders the element
Key('Key', 'Key', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Key
include('fontawesome-6/Solid/Key')

' renders the element
Key('Key', 'Key', 'an optional tech label', 'an optional description')
@enduml
```

