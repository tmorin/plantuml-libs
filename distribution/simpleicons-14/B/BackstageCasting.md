# BackstageCasting


```text
simpleicons-14/B/BackstageCasting
```

```text
include('simpleicons-14/B/BackstageCasting')
```



| Illustration | BackstageCasting |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/BackstageCasting.png) | ![illustration for BackstageCasting](../../simpleicons-14/B/BackstageCasting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackstageCastingXs>`
- `<$BackstageCastingSm>`
- `<$BackstageCastingMd>`
- `<$BackstageCastingLg>`





## BackstageCasting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element BackstageCasting
include('simpleicons-14/B/BackstageCasting')

' renders the element
BackstageCasting('BackstageCasting', 'Backstage Casting', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element BackstageCasting
include('simpleicons-14/B/BackstageCasting')

' renders the element
BackstageCasting('BackstageCasting', 'Backstage Casting', 'an optional tech label', 'an optional description')
@enduml
```

