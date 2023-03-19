# ToiletPortable


```text
fontawesome-6/Solid/ToiletPortable
```

```text
include('fontawesome-6/Solid/ToiletPortable')
```



| Illustration | ToiletPortable |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ToiletPortable.png) | ![illustration for ToiletPortable](../../fontawesome-6/Solid/ToiletPortable.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ToiletPortable
include('fontawesome-6/Solid/ToiletPortable')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ToiletPortable
include('fontawesome-6/Solid/ToiletPortable')

' renders the element
ToiletPortable('ToiletPortable', 'Toilet Portable', 'an optional tech label', 'an optional description')
@enduml
```

