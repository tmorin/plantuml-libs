# ToiletsPortable


```text
fontawesome/Solid/ToiletsPortable
```

```text
include('fontawesome/Solid/ToiletsPortable')
```



| Illustration | ToiletsPortable |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToiletsPortable.png) | ![illustration for ToiletsPortable](../../fontawesome/Solid/ToiletsPortable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToiletsPortableXs>`
- `<$ToiletsPortableSm>`
- `<$ToiletsPortableMd>`
- `<$ToiletsPortableLg>`





## ToiletsPortable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToiletsPortable
include('fontawesome/Solid/ToiletsPortable')

' renders the element
ToiletsPortable('ToiletsPortable', 'Toilets Portable', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ToiletsPortable
include('fontawesome/Solid/ToiletsPortable')

' renders the element
ToiletsPortable('ToiletsPortable', 'Toilets Portable', 'an optional tech label', 'an optional description')
@enduml
```

