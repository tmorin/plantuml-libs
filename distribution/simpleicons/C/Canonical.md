# Canonical


```text
simpleicons/C/Canonical
```

```text
include('simpleicons/C/Canonical')
```



| Illustration | Canonical |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Canonical.png) | ![illustration for Canonical](../../simpleicons/C/Canonical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CanonicalXs>`
- `<$CanonicalSm>`
- `<$CanonicalMd>`
- `<$CanonicalLg>`





## Canonical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Canonical
include('simpleicons/C/Canonical')

' renders the element
Canonical('Canonical', 'Canonical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Canonical
include('simpleicons/C/Canonical')

' renders the element
Canonical('Canonical', 'Canonical', 'an optional tech label', 'an optional description')
@enduml
```

