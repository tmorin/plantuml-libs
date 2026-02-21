# Sonatype


```text
simpleicons-14/S/Sonatype
```

```text
include('simpleicons-14/S/Sonatype')
```



| Illustration | Sonatype |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sonatype.png) | ![illustration for Sonatype](../../simpleicons-14/S/Sonatype.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonatypeXs>`
- `<$SonatypeSm>`
- `<$SonatypeMd>`
- `<$SonatypeLg>`





## Sonatype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonatype
include('simpleicons-14/S/Sonatype')

' renders the element
Sonatype('Sonatype', 'Sonatype', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonatype
include('simpleicons-14/S/Sonatype')

' renders the element
Sonatype('Sonatype', 'Sonatype', 'an optional tech label', 'an optional description')
@enduml
```

