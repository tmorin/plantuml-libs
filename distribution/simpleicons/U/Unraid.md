# Unraid


```text
simpleicons/U/Unraid
```

```text
include('simpleicons/U/Unraid')
```



| Illustration | Unraid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Unraid.png) | ![illustration for Unraid](../../simpleicons/U/Unraid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnraidXs>`
- `<$UnraidSm>`
- `<$UnraidMd>`
- `<$UnraidLg>`





## Unraid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unraid
include('simpleicons/U/Unraid')

' renders the element
Unraid('Unraid', 'Unraid', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unraid
include('simpleicons/U/Unraid')

' renders the element
Unraid('Unraid', 'Unraid', 'an optional tech label', 'an optional description')
@enduml
```

