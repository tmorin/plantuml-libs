# ToiletPortable


```text
fontawesome/Solid/ToiletPortable
```

```text
include('fontawesome/Solid/ToiletPortable')
```



| Illustration | ToiletPortable |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToiletPortable.png) | ![illustration for ToiletPortable](../../fontawesome/Solid/ToiletPortable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToiletPortableXs>`
- `<$ToiletPortableSm>`
- `<$ToiletPortableMd>`
- `<$ToiletPortableLg>`





## ToiletPortable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToiletPortable
include('fontawesome/Solid/ToiletPortable')

' renders the element
ToiletPortable('ToiletPortable', 'Toilet Portable', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ToiletPortable
include('fontawesome/Solid/ToiletPortable')

' renders the element
ToiletPortable('ToiletPortable', 'Toilet Portable', 'an optional tech label', 'an optional description')
@enduml
```

