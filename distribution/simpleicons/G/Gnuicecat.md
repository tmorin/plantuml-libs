# Gnuicecat


```text
simpleicons/G/Gnuicecat
```

```text
include('simpleicons/G/Gnuicecat')
```



| Illustration | Gnuicecat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gnuicecat.png) | ![illustration for Gnuicecat](../../simpleicons/G/Gnuicecat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GnuicecatXs>`
- `<$GnuicecatSm>`
- `<$GnuicecatMd>`
- `<$GnuicecatLg>`





## Gnuicecat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gnuicecat
include('simpleicons/G/Gnuicecat')

' renders the element
Gnuicecat('Gnuicecat', 'Gnuicecat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gnuicecat
include('simpleicons/G/Gnuicecat')

' renders the element
Gnuicecat('Gnuicecat', 'Gnuicecat', 'an optional tech label', 'an optional description')
@enduml
```

