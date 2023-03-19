# Adguard


```text
simpleicons-8/A/Adguard
```

```text
include('simpleicons-8/A/Adguard')
```



| Illustration | Adguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Adguard.png) | ![illustration for Adguard](../../simpleicons-8/A/Adguard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdguardXs>`
- `<$AdguardSm>`
- `<$AdguardMd>`
- `<$AdguardLg>`





## Adguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adguard
include('simpleicons-8/A/Adguard')

' renders the element
Adguard('Adguard', 'Adguard', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adguard
include('simpleicons-8/A/Adguard')

' renders the element
Adguard('Adguard', 'Adguard', 'an optional tech label', 'an optional description')
@enduml
```

