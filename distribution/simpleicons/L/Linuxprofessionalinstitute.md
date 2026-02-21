# Linuxprofessionalinstitute


```text
simpleicons/L/Linuxprofessionalinstitute
```

```text
include('simpleicons/L/Linuxprofessionalinstitute')
```



| Illustration | Linuxprofessionalinstitute |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Linuxprofessionalinstitute.png) | ![illustration for Linuxprofessionalinstitute](../../simpleicons/L/Linuxprofessionalinstitute.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinuxprofessionalinstituteXs>`
- `<$LinuxprofessionalinstituteSm>`
- `<$LinuxprofessionalinstituteMd>`
- `<$LinuxprofessionalinstituteLg>`





## Linuxprofessionalinstitute

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linuxprofessionalinstitute
include('simpleicons/L/Linuxprofessionalinstitute')

' renders the element
Linuxprofessionalinstitute('Linuxprofessionalinstitute', 'Linuxprofessionalinstitute', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linuxprofessionalinstitute
include('simpleicons/L/Linuxprofessionalinstitute')

' renders the element
Linuxprofessionalinstitute('Linuxprofessionalinstitute', 'Linuxprofessionalinstitute', 'an optional tech label', 'an optional description')
@enduml
```

